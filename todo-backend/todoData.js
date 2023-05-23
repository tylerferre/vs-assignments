const {v4: uuidv4} = require('uuid')

const todoData = [
    {
        name: 'Drink water',
        description: 'Drink more water in the day',
        imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F185072125%2Fphoto%2Fbottle-of-spring-water.jpg%3Fb%3D1%26s%3D170667a%26w%3D0%26k%3D20%26c%3DZbQ_q2l6-q_oL8FN6OjDX01IhMYnJAUB-nMoGKyASGM%3D&tbnid=CE71d1LNOf-XCM&vet=12ahUKEwiQkM7gkoz_AhX5MUQIHXRVCBYQMygCegUIARDPAg..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fwater-bottle&docid=TKw8WePaOXarWM&w=483&h=357&q=unsplash%20water%20bottle&ved=2ahUKEwiQkM7gkoz_AhX5MUQIHXRVCBYQMygCegUIARDPAg',
        completed: 'true',
        _id: uuidv4()
    }, {
        name: 'Do laundry',
        description: 'Wash your clothes',
        imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F114282080%2Fphoto%2Fwashing.jpg%3Fb%3D1%26s%3D170667a%26w%3D0%26k%3D20%26c%3DqDrJ1aFxubDfwgINSjLxqmKwj_vFg8kG47k83JBHgOw%3D&tbnid=ae6zT3tZKBeI7M&vet=12ahUKEwipooDTk4z_AhVdNEQIHRGLBYgQMygBegUIARCcAw..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flaundry-basket&docid=tCmoWy7qx_f0bM&w=505&h=340&q=unsplash%20laundry%20basket&ved=2ahUKEwipooDTk4z_AhVdNEQIHRGLBYgQMygBegUIARCcAw',
        completed: 'false',
        _id: uuidv4()
    },
    {
        name: 'Naked Spider-man',
        description: '100% spider-man game and get the final skin',
        imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1568890643060-ef2293be79b6%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwaWRlcm1hbiUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&tbnid=DZMqlDHzIJ83aM&vet=12ahUKEwicivejlIz_AhUxNEQIHVSDASQQMygtegUIARCeAg..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fspiderman-wallpaper&docid=whuL26WRvFFRAM&w=1000&h=667&q=unsplash%20spiderman&ved=2ahUKEwicivejlIz_AhUxNEQIHVSDASQQMygtegUIARCeAg',
        completed: 'false',
        _id: uuidv4()
    }
]

module.exports = todoData