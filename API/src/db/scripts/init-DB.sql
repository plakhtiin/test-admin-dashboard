DO
$$
    BEGIN
        CREATE TABLE IF NOT EXISTS device_types
        (
            title CHAR(100),
            id    INTEGER DEFAULT nextval('device_type_id_seq'::regclass)
        );

        CREATE TABLE IF NOT EXISTS operating_systems
        (
            name CHAR(100),
            id   INTEGER DEFAULT nextval('operating_systems_id_seq'::regclass)
        );

        CREATE TABLE IF NOT EXISTS rooms
        (
            name VARCHAR(100),
            icon VARCHAR(50)[] DEFAULT '{fas,fa-person-booth}'::character varying[],
            id   INTEGER       DEFAULT nextval('rooms_room_id_seq'::regclass)
        );

        CREATE TABLE IF NOT EXISTS device_activities
        (
            device_type_id INTEGER,
            device_id      INTEGER,
            activity_freq  INTEGER,
            activity_date  TIMESTAMP DEFAULT now()
        );
        CREATE TABLE IF NOT EXISTS devices
        (
            id          INTEGER NOT NULL DEFAULT nextval('lists_id_seq1'::regclass),
            title       char(100)        DEFAULT ''::bpchar,
            device_type INTEGER NOT NULL,
            os_type     INTEGER NOT NULL,
            room_id     INTEGER NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY (device_type) REFERENCES device_types (id) ON DELETE SET NULL ON UPDATE CASCADE,
            FOREIGN KEY (os_type) REFERENCES operating_systems (id) ON DELETE SET NULL ON UPDATE CASCADE,
            FOREIGN KEY (room_id) REFERENCES rooms (id) ON DELETE SET NULL ON UPDATE CASCADE
        );
    END;
$$;