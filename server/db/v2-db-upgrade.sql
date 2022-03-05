-- #27 https://github.com/briangormanly/agora/issues/27 make goal completable when no additional topics will be added (in production https://github.com/briangormanly/agora/pull/29)
ALTER TABLE goals ADD COLUMN completable BOOLEAN DEFAULT true;

-- #30 https://github.com/briangormanly/agora/issues/30 add pre assessment threshold and post (#31)
ALTER TABLE assessments ADD COLUMN pre_threshold INTEGER DEFAULT 90;
ALTER TABLE assessments ADD COLUMN post_threshold INTEGER DEFAULT 70;

-- #41 https://github.com/briangormanly/agora/issues/41
ALTER TABLE completed_assessment RENAME COLUMN pre_post TO topic_assessment_number;
ALTER TABLE completed_assessment ADD COLUMN correct_percentage DECIMAL(4,3);            -- existing rows will need to be computed as they are already saved
ALTER TABLE completed_assessment ADD COLUMN completion_time TIMESTAMP;                  -- existing rows should be set to match create_time
