@app
notes

@http
get /
get /login
get /signup
get /logout
get /notes
post /login
post /signup

post /notes
get /notes/:noteId
post /notes/:noteId
post /notes/:noteId/delete

@aws
profile default

@shared

# @tables
# Note
#   pk *String
#   sk **String
#   ttl TTL

# people
#   email *String

# notes
#   email *String
#   noteId *String

# notesapi
#   pk *String
#   sk **String
#   # noteId *String

# database-name will end up as notes-staging-notes ({app-name}-{env}-{tableName})
@tables
notes
  PK *String
  SK **String

@tables-indexes
notes
  GSI1PK *String
  GSI1SK **String
  name GSI1

# notes
#   GSI2PK *String
#   GSI2SK **String
#   name GSI2

# notes
#   GSI3PK *String
#   GSI3SK **String
#   name GSI3

# notes
#   GSI4PK *String
#   GSI4SK **String
#   name GSI4