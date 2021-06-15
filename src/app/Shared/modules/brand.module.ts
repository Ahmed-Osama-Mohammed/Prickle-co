

export interface Brand {
    name:            string;
    establishedYear: number;
    address:         string;
    street:          string;
    phone:           string;
    email:           string;
    openTime:        OpenTime;
}

export interface OpenTime {
    day1:  string;
    time1: string;
    day2:  string;
    time2: string;
    day3:  string;
    time3: string;
}
