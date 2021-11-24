describe('Task Service', () => {
  describe('#create', () => {
    it.todo('should throw error if teacher not found')
    it.todo('should throw error if team not found')
    it.todo('should throw error if score wrong')
    it.todo('should throw error if date wrong')
    it.todo('should throw error if have more than two tasks in the same day')
    it.todo('should create task')
  })
  describe('#validateDates', () => {
    it.todo('should return false if finalDateTime < startDateTime')
    it.todo('should return false if startDateTime < currentDateTime')
    it.todo('should return true if everything is correct')
  })
  describe('#indexByFinalDate', () => {
    it.todo('should get task by finalDate ')
  })
  describe('#update', () => {
    it.todo('should throw error if task not found')
    it.todo('should throw error if teacher not found')
    it.todo('should throw error if teacher id is incorrect')
    it.todo('should throw error if score wrong')
    it.todo('should update task')
  })
  describe('#delete', () => {
    it.todo('should throw error if task not found')
    it.todo('should throw error if teacher not found')
    it.todo('should throw error if teacher id is incorrect')
    it.todo('should delete task')
  })
  describe('#indexByTeacher', () => {
    it.todo('should throw error if teacher not found')
    it.todo('should get tasks by teacher')
  })
  describe('#indexTasksWeek', () => {
    it.todo('should throw error if team not found')
    it.todo('should return tasks by week with situation')
  })
  describe('#statisticsWeekTasks', () => {
    it.todo('should return statiscs by week')
  })
  describe('#indexByTeam', () => {
    it.todo('should throw error if team not found')
    it.todo('should return tasks by team')
  })
  describe('#indexTasksByStudent', () => {
    it.todo('should throw error if student not found')
    it.todo('should return tasks by student')
  })
  describe('#indexByIdWithStudent', () => {
    it.todo('should throw error if student not found')
    it.todo('should throw error if task not found')
    it.todo('should return task by id with student')
  })
  describe('#indexByIdWithTeacher', () => {
    it.todo('should throw error if teacher not found')
    it.todo('should throw error if task not found')
    it.todo('should throw error if id teacher wrong')
    it.todo('should return task by id with teacher')
  })
})
