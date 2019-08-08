DROP FUNCTION IF EXISTS get_os_type(numeric);

CREATE OR REPLACE FUNCTION get_os_type(os_id NUMERIC)
    RETURNS name AS
$$
DECLARE
    result varchar(100);
BEGIN
    result := (SELECT name FROM operating_systems as os WHERE os_id = os.id);
    CASE
        WHEN result IS NOT NULL
            THEN RETURN result;
        ELSE
            result := '';
            RETURN result;
        END CASE;
END
$$ LANGUAGE plpgsql;