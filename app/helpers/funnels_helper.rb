module FunnelsHelper

  def format_params(raw_params)
    raise ApplicationController::ParameterMissing, :start_date unless raw_params[:start_date].present?

    query_params = raw_params.permit(:start_date, :end_date)
    query_params[:start_date] = query_params[:start_date].in_time_zone.to_date

    unless query_params[:end_date].present?
      query_params[:end_date] = query_params[:start_date].in_time_zone.to_date + 1.week
    else
      query_params[:end_date] = query_params[:end_date].in_time_zone.to_date
    end

    query_params
  end

  def query(options={})
    Applicant.select(
      "workflow_state",
      "count (*) as count",
      "CASE #{generate_date_range_bucket(options)} END as date_range_bucket"
    )
    .between_date_ranges(options)
    .group(:date_range_bucket, :workflow_state)
    .group_by(&:date_range_bucket)
  end

  def generate_date_range_bucket(options={})
    first_day = options.fetch(:start_date)
    last_day = options.fetch(:end_date)

    num_weeks = ((last_day - first_day).to_f / 7).ceil
    num_weeks += 1 unless first_day.monday?
    bucket_end = nil

    bucket_ranges = (1..num_weeks).map do |week|
      bucket_start = (bucket_end.nil? ? first_day : (bucket_end + 1.day)).beginning_of_day
      bucket_end   = (bucket_start.beginning_of_week(:monday) + 6.days).end_of_day
      bucket_end   = last_day if bucket_end > last_day

      {bucket_start: bucket_start, bucket_end: bucket_end}
    end

    bucket_ranges.map do |range|
      bstart = range[:bucket_start]
      bend   = range[:bucket_end]
      bname  = "#{bstart.to_date}-#{bend.to_date}"

      "WHEN created_at >= '#{bstart}' AND created_at <= '#{bend}' THEN '#{bname}'"
    end.join(" ")

  end

end
