let data = {
    sophia: {
        id: 33,
        study: [

            {
                primary:
                    [
                        { school_name: 'ABC primary school' },
                        { location: 'peters burg' }

                    ]
            },
            {
                secondary: [
                    { school_name: 'ABC primary school' },
                    { location: 'peters burg' }

                ]
            }



        ]
    },

}

console.log(data.sophia.study[1].secondary[1].location);

console.log(data.sophia.study[0].primary[1].location)


