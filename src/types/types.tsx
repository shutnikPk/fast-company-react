export interface IProfeccion{
    const professions = {
        doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
        waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
        physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
        engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
        actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
        cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
    }
}

export interface IQualities{
    const qualities = {
        tedious: { _id: "67rdca3eeb7f6fgeed471198", name: "Нудила", color: "primary" },
        strange: { _id: "67rdca3eeb7f6fgeed471100", name: "Странный", color: "secondary" },
        buller: { _id: "67rdca3eeb7f6fgeed4711012", name: "Троль", color: "success" },
        alcoholic: { _id: "67rdca3eeb7f6fgeed471101", name: "Алкоголик", color: "danger" },
        handsome: { _id: "67rdca3eeb7f6fgeed471102", name: "Красавчик", color: "info" },
        uncertain: { _id: "67rdca3eeb7f6fgeed471102", name: "Неуверенный", color: "dark" },
    
    }
}

export interface IUserItem {    
    const users = [
        {
            _id: "67rdca3eeb7f6fgeed471815",
            name: "Джон Дориан",
            profession: professions.doctor,
            qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
            completedMeetings: 36,
            rate: 2.5
        }
}
