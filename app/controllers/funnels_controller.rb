class FunnelsController < ApplicationController
  def index
    @start_date = params[:start_date].to_date
    @end_date = params[:end_date].to_date

    data = aggregate_data

    # so sun = 0, mon = 1
    @funnel = data

    respond_to do |format|
      format.html { @chart_funnel = formatted_funnel }
      format.json { render json: @funnel }
    end
  end

  private

  # generates a formatted version of the funnel for display in d3
  def formatted_funnel
    formatted = Hash.new { |h, k| h[k] = [] }

    @funnel.each do |date, state_counts|
      state_counts.each do |state, count|
        formatted[state] << {label: date, value: count}
      end
    end

    formatted.map do |k, v|
      {
        key: k.humanize,
        values: v
      }
    end
  end

  def aggregate_data
    data = Applicant.where(created_at: @start_date..@end_date)

    data
  end

  def weeks_between
  end
end
