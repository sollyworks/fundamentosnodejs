const tasks = []

export const routes = [
  {
    method: 'GET',
    path: '/tasks',
    handler: (req, res) => {
      res.writeHead(200).end(JSON.stringify(tasks))
    }
  },
    {
    method: 'POST',
    path: '/tasks',
    handler: (req, res) => {
      const { title, description} = req.body

      const task = {
        id: tasks.length + 1,
        title,
        description,
        completed: false
      }

      tasks.push(task)
      res.writeHead(201)
      .end()
    }
  }
]