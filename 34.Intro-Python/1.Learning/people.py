import area


PEOPLE_AT_CONCERT_PER_SQUARE_METER = 2  # nº de pessoas por m2 em média
FIELD_LENGTH = 240  # em metros
FIELD_WIDTH = 45  # em metros
PEOPLE_AT_CONCERT = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH)
    // PEOPLE_AT_CONCERT_PER_SQUARE_METER
)


print("Estão presentes no show aproximadamente", PEOPLE_AT_CONCERT, "pessoas")
