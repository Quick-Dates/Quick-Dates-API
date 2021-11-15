describe('TeamService', () => {
  describe('#addStudentToTeam', () => {
    it.todo('should create course if not found')
    it.todo('should create team if not found')
    it.todo('should throw error if student not found')
    it.todo('should update id_team in student')
    it.todo('should return team if all succelly')
  })
  describe('#create', () => {
    it.todo('should throw error if course not found')
    it.todo('should throw error if yearCreation > yearCurrent')
    it.todo('should throw error if yearCreation < yearCurrent - 3')
    it.todo('should create team')
    it.todo('should return team if all succelly')
  })
  describe('#index', () => {
    it.todo('should list teams')
  })
  describe('#getTeamsByCourse', () => {
    it.todo('should list teams of course')
    it.todo('should format name of course')
  })
  describe('#indexById', () => {
    it.todo('should find by id team')
    it.todo('should throw error if tean not found')
    it.todo('should format name of team')
  })
  describe('#delete', () => {
    it.todo('should delete team')
    it.todo('should return team deleted')
  })
  describe('#update', () => {
    it.todo('should update team')
    it.todo('should return team updated')
  })
  describe('#indexStudentsByTeam', () => {
    it.todo('should list students of team')
  })
})
