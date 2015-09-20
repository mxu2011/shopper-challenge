class AddCreatedAtIndexToApplicants < ActiveRecord::Migration
  def self.up
    unless index_exists?(:applicants, :created_at)
      add_index :applicants, :created_at
    end
  end

  def self.down
    if index_exists?(:applicants, :created_at)
      remove_index :applicants, :created_at
    end
  end
end
