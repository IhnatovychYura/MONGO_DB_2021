// Dump //
db.students.insertMany(
    [
        {
            "name": "Bob", "class": 7, "lessons": ["english", "mathematics"], "avgScore": 3.5, "parents": [
                {"gender": "female", "name": "Ira"},
                {"gender": "male", "name": "Dima", "profession": "programmer"}
            ]
        },
        {
            "name": "Alice", "class": 7, "lessons": ["english", "mathematics", 'geology'], "avgScore": 5, "parents": [
                {"gender": "female", "name": "Katya", "profession": "doctor"},
                {"gender": "male", "name": "Andrii", "profession": "doctor"}
            ]
        },
        {"name": "Viktor", "class": 7, "lessons": ["german", "informatics"], "avgScore": 4.1},
        {"name": "Dima", "class": 7, "lessons": ["german", "mathematics", "physics"], "avgScore": 3.5},
        {
            "name": "Katerina", "class": 1, "lessons": ["basic"], "avgScore": 4, "parents": [
                {"gender": "male", "name": "Igor", "profession": "scientist"}
            ]
        },
        {
            "name": "Ivanka", "class": 1, "lessons": ["basic"], "avgScore": 4.91, "parents": [
                {"gender": "female", "name": "Nadya", "profession": "teacher"},
                {"gender": "male", "name": "Oleg", "profession": "sailor"}
            ]
        },
        {
            "name": "Oleguk", "class": 1, "lessons": ["basic"], "avgScore": 4.2, "parents": [
                {"gender": "female", "name": "Katya", "profession": "journalist"},
                {"gender": "male", "name": "Miroslav", "profession": "photographer"}
            ]
        },
        {
            "name": "Igorko", "class": 1, "lessons": ["basic"], "avgScore": 2.61, "parents": [
                {"gender": "male", "name": "Vitalik", "profession": "builder"},
            ]
        },
        {
            "name": "Katya", "class": 1, "lessons": ["basic"], "avgScore": 3.92, "parents": [
                {"gender": "female", "name": "Solomiya", "profession": "architect"},
                {"gender": "male", "name": "Andriy", "profession": "driver"}
            ]
        },
        {
            "name": "Viktor", "class": 1, "lessons": ["basic"], "avgScore": 3.54, "parents": [
                {"gender": "male", "name": "Oleksandr", "profession": "soldier"},
                {"gender": "female", "name": "Svitlana", "profession": "soldier"}
            ]
        },
        {
            "name": "Ivan", "class": 2, "lessons": ["basic"], "avgScore": 4.2, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "trainer"},
                {"gender": "female", "name": "Vika"}
            ]
        },
        {
            "name": "Artem", "class": 2, "lessons": ["how to be a star"], "avgScore": 3.9, "parents": [
                {"gender": "female", "name": "Albert", "profession": "star"},
            ]
        },
        {
            "name": "Kostya", "class": 2, "lessons": ["basic"], "avgScore": 4.24, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Inna", "class": 2, "lessons": ["basic"], "avgScore": 3.11, "parents": [
                {"gender": "male", "name": "Adam", "profession": "musician"},
                {"gender": "female", "name": "Diana"}
            ]
        },
        {
            "name": "Ivan", "class": 3, "lessons": ["basic"], "avgScore": 4.9, "parents": [
                {"gender": "male", "name": "Vlad", "profession": "merchandiser"},
                {"gender": "female", "name": "Galina", "profession": "teacher"}
            ]
        },
        {
            "name": "Galina", "class": 3, "lessons": ["basic"], "avgScore": 3.8, "parents": [
                {"gender": "male", "name": "Johny", "profession": "doctor"},
                {"gender": "female", "name": "Sasha", "profession": "porn star"}
            ]
        },
        {
            "name": "Dima", "class": 3, "lessons": ["basic"], "avgScore": 3.5, "parents": [
                {"gender": "male", "name": "Dima", "profession": "trainer"},
                {"gender": "female", "name": "Olga", "profession": "sportsman"}
            ]
        },
        {
            "name": "Nastya", "class": 4, "lessons": ["informatics", "physics"], "avgScore": 4.1, "parents": [
                {"gender": "male", "name": "Viktor", "profession": "programmer"},
                {"gender": "female", "name": "Karina", "profession": "doctor"}
            ]
        },
        {
            "name": "Murka", "class": 4, "lessons": ["physics"], "avgScore": 2.7, "parents": [
                {"gender": "female", "name": "Inessa", "profession": "writer"}
            ]
        },
        {
            "name": "Vasyl", "class": 4, "lessons": ["english"], "avgScore": 4.93, "parents": [
                {"gender": "female", "name": "Solomiya", "profession": "architect"},
                {"gender": "male", "name": "Andriy", "profession": "driver"}
            ]
        },
        {
            "name": "Feliks", "class": 4, "lessons": ["physics"], "avgScore": 2.12, "parents": [
                {"gender": "female", "name": "Tanya", "profession": "designer"},
                {"gender": "male", "name": "Andriy", "profession": "writer"}
            ]
        },
        {
            "name": "Katerina", "class": 4, "lessons": ["geology"], "avgScore": 4.51, "parents": [
                {"gender": "female", "name": "Ivanka", "profession": "architect"},
            ]
        },
        {
            "name": "Konstantin",
            "class": 4,
            "lessons": ["english", "informatics", "geology"],
            "avgScore": 2.31,
            "parents": [
                {"gender": "female", "name": "Natylya", "profession": "HR"},
                {"gender": "male", "name": "Andriy", "profession": "economist"}
            ]
        },
        {
            "name": "Illya", "class": 4, "lessons": ["basic"], "avgScore": 2.78, "parents": [
                {"gender": "female", "name": "Irina", "profession": "waitress"},
                {"gender": "female", "name": "Olga", "profession": "chief financial officer"}
            ]
        },
        {
            "name": "Roman", "class": 4, "lessons": ["basic"], "avgScore": 5, "parents": [
                {"gender": "male", "name": "Igor", "profession": "programmer"},
                {"gender": "female", "name": "Oksana", "profession": "scientist"}
            ]
        },
        {
            "name": "Petro", "class": 4, "lessons": ["basic"], "avgScore": 4.8, "parents": [
                {"gender": "male", "name": "Dima", "profession": "builder"},
                {"gender": "female", "name": "Inna", "profession": "seamstress"}
            ]
        }
    ]
);


db.teacher.insertMany(
    [
        {"name": "Mariya Ivanivna", "class_curator": 7, "lesson": "english", "payment": 2000},
        {"name": "Sergey Viktorovich", "class_curator": 9, "lesson": "informatics", "payment": 3200},
        {"name": "Ivan Borisovich", "class_curator": 6, "lesson": "mathematics", "payment": 2500},
        {"name": "Tetyna Visilivna", "class_curator": 5, "lesson": "french", "payment": 2000},
        {"name": "Oksana Olegivna", "class_curator": 8, "lesson": "physics", "payment": 4000},
        {"name": "Ostap Miroslavovich", "class_curator": 4, "lesson": "geology", "payment": 2500},
        {"name": "Dmitro Igorovich", "class_curator": 3, "lesson": "basic", "payment": 2200},
        {"name": "Mikhailo Denisovick", "class_curator": 2, "lesson": "basic", "payment": 2300},
        {"name": "Diana Viktorivna", "class_curator": 1, "lesson": "basic", "payment": 2100}
    ]
);


//

db.getCollection('teacher').find({});


db.getCollection('teacher').insert({
    "model": "Yamaha Fazer",
    "year": 2008,
    "price": 3000
})

db.getCollection("teacher").insert({
    "name": "Dima",
    "profession": "Developer",
    "cars": [
        {model: "Volvo"},
        {model: "BMW"}
    ]
})

db.getCollection('teacher').find({payment: 2500})

db.getCollection('teacher').find({
    payment: 2500,
    class_curator: 6
})


db.getCollection('teacher').find(
    {payment: 2000}, // об'єкт пошуку
    {
        name: true,  // об'єкт відображення, тобто шо має відобразитись
        payment: 1,
        _id: 0
    }
)

db.getCollection('teacher').find({
    $or: [
        {payment: 2500},
        {payment: 2000},
        {class_curator: 8},
    ]
})


db.getCollection('teacher').find({
    $and: [
        {payment: 2500},
        {class_curator: 6}
    ]
})

// знаходить всіх в кого ім'я починається на "О" (з великої букви!!!)
db.getCollection("teacher").find({
    name: /^O/
})

// знаходить всіх в кого ім'я починається на "сер" (не реагує на розмір букви)
db.getCollection('teacher').find({
    name: /^ser/i // ser%
})

// знаходить всіх в кого ім'я закінчується на "ч"
db.getCollection('teacher').find({
    name: /ch$/i
})

// знаходить всіх в кого в імені є "тор"
db.getCollection('teacher').find({
    name: /.*tor.*/i //%tor%
})

// -1 сортує від більшого до найменшого
db.getCollection('teacher')
    .find({})
    .sort({payment: -1, class_curator: 1})


db.getCollection('teacher').find({}).limit(2).skip(4)


db.getCollection('teacher').find({
    payment: {
        //$gte: 2500  //>=
        //$gt: 2500 // >
        //$lte: 2500 // <=
        //$lt: 2500
    }
});

db.getCollection('teacher').find({
    class_curator: {$in: [7, 8, 9]}
})


db.getCollection('teacher').find({
    class_curator: {$nin: [7, 8, 9]}
})


db.getCollection('teacher').find({
    class_curator: {
        $not: {
            $in: [7, 8, 9]
        }
    }
})


db.getCollection('teacher').update(
    {}, // FIND
    {}, // UPDATE
    {} // OPTIONS
)


db.getCollection('teacher').update(
    {proffesion: "Developer"},
    {$set: {girl: true}}, // сет прописуємо щоб не перетирати об'єкт а добавляти до нього
    {multi: true} // щоб оновляло всіх з бази а не тільки першого знайденого
)


db.getCollection('teacher').update(
    {proffesion: "Developer"},
    {
        $set: {
            cars: [{model: "Volvo"}, {model: "Lanos"}],
            name: "Ivan"
        }
    },
    {multi: true}
)


db.getCollection('teacher').find({
    cars: {$size: 2}
})


db.getCollection('teacher').find({
    cars: {$exists: false}
})


db.getCollection('teacher').update(
    {
        cars: {$size: 4}
    },
    {
        $set: {
            "cars.$[].model": "Bika" // всі 4 машини замінити на Біка
        }
    }
)


db.getCollection('teacher').update(
    {
        cars: {$size: 4}
    },
    {
        $set: {
            "cars.3.model": "Bibika" // лише 3 машину замінить на Біку
        }
    }
)


db.getCollection('teacher').find({
    "cars.model": "Volvo"
})


db.getCollection('teacher').aggregate([
    {},
    {},
    {},
    {},
    {},
    {}
])


db.getCollection('teacher').aggregate([
    {
        $group: {
            _id: "$payment", // завжди має бути цей _ід
            countOfTeachers: {
                $sum: 1
            }
        }
    }
])


db.getCollection('teacher').aggregate([
    {
        $group: {
            _id: "$payment",
            countOfTeachers: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            countOfTeachers: -1,
            "_id": 1
        }
    }
])


db.getCollection('teacher').aggregate([
    {
        $group: {
            _id: "$payment",
            countOfTeachers: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            countOfTeachers: -1,
            "_id": 1
        }
    },
    {
        $match: {
            countOfTeachers: {
                $gte: 2
            }
        }
    }
])


db.getCollection('teacher').aggregate([
    {$match: {payment: {$gte: 3500}}},
    {
        $count: "Darmoedu"
    }
])


db.getCollection('teacher').aggregate([
    {
        $group: {
            "_id": "$payment",
            sumOfPeaymnts: {
                $sum: 1
            }
        }
    }
])


db.getCollection('teacher').aggregate([
    {
        $group: {
            "_id": 0,
            sumOfPeaymnts: {
                $sum: "$payment"
            }
        }
    }
])


db.getCollection('teacher').aggregate([
    {
        $group: {
            "_id": 0,
            sumOfPeaymnts: {
                // $sum: "$payment"
                // $avg: "$payment"
                // $max: "$payment"
                // $min: "$payment"
            }
        }
    }
])


db.getCollection('teacher').aggregate([
    {
        $group: {
            "_id":
                "$payment",
            teachersCount: {
                $sum: 1
            }
        }
    },

    {
        $project: {
            "pay": "$_id",
            teachersCount: 1,
            "_id": 0
        }
    }
])


db.getCollection('teacher').aggregate([
    {
        $lookup:
            {
                from: "students",
                localField: "class_curator",
                foreignField: "class",
                as: "std"
            }
    }
])


db.getCollection('teacher').remove({girl: true})
