CREATE TABLE attdata
(
    id BIGSERIAL PRIMARY KEY,
    att_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    lunch_min INT NOT NULL
)