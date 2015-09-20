class FunnelsController < ApplicationController
  include FunnelsHelper

  def index
    options = format_params(params)

    funnels = query(options)

    @funnel = funnels;

    respond_to do |format|
      format.html { @chart_funnel = funnels}
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
end
