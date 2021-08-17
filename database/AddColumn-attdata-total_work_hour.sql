ALTER TABLE attdata 
ADD COLUMN total_work_hour double precision GENERATED ALWAYS AS ((EXTRACT(EPOCH FROM end_time-start_time)/3600) - (lunch_min::float/60))  STORED;