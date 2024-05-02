import Dexie from 'dexie'

const DB_NAME = 'todo-ing'

export const db = new Dexie(DB_NAME)

db.version(1).stores({
  notes: '++id, image, header, content'
})
