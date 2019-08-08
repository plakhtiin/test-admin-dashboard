DROP FUNCTION IF EXISTS get_devices();

CREATE OR REPLACE FUNCTION get_devices()
    RETURNS TABLE
            (
                id     INTEGER,
                title  CHAR(100),
                room   json,
                os     json,
                device json
            )
AS
$$
BEGIN
    RETURN QUERY SELECT dv.id,
                        dv.title,
                        to_json(room_obj) as room,
                        to_json(os_obj)   as os,
                        to_json(dt_obj)   as device
                 FROM devices dv,
                      LATERAL (SELECT icon, name FROM rooms r WHERE dv.room_id = r.id) AS room_obj,
                      get_os_type(dv.os_type) AS os_obj,
                      LATERAL (SELECT dt.title FROM device_types dt WHERE dv.device_type = dt.id) AS dt_obj;
END;

$$ LANGUAGE plpgsql;