import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { db } from '.'

async function main() {
  console.log('🤖[Migration] Start')
  await migrate(db, {
    migrationsFolder: 'src/db/migrations',
  })

  console.log('🤖[Migration] End')
  process.exit(0)
}

main().catch(err => {
  console.error(err)
  process.exit(0)
})
