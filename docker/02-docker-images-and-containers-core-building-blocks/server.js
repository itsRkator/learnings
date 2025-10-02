const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

let userGoal = 'Become an advanced Full Stack Developer. Learning Docker!';

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
        <html>
            <head>
                <link rel="stylesheet" href="/styles.css" >
            </head>
            <body>
                <section>
                    <h2>My Future Goals!</h2>
                    <h3>${userGoal}</h3>
                </section>
                <form action="/store-goal" method="POST">
                    <div class="form-control">
                        <label>Course Goal!</label>
                        <input type="text" name="goal" placeholder="Enter Goal" >
                    </div>
                    <button>Set Course Goal</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/store-goal', (req, res) => {
  const { goal } = req.body;
  console.log(goal);
  userGoal = goal;
  res.redirect('/');
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
