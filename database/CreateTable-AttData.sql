CREATE TABLE attdata
(
    id BIGSERIAL PRIMARY KEY,
    att_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    lunch_min INT NOT NULL
)

GO;

ALTER TABLE attdata 
ADD COLUMN total_work_hour double precision GENERATED ALWAYS AS (ROUND(((EXTRACT(EPOCH FROM end_time-start_time)/3600) - (lunch_min::float/60))::numeric, 2)) STORED;