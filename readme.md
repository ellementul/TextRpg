# Text RPG

UI => character

World => UI(many info) but show player a little info

World:
  - Characters
  - Things
  - Places
  - Inventory

The place can 
Inventory contents things
Inventory has limit of size
Character combines things
Character can take thing
Character can drop thing
Character can give another character
Character uses inventory

## Character

### Event data:
- place_id

### Send events:
- watching
- saying(target)

### Listen to:
- saying(target)
- sounds event
- say event

### Characteristics
- Constitution
- Intelligence
- Charisma


## Place
- content characters
- content things

### Send events
- sounds event
- speaking event

### Listen to events:
- character saying
- character watching
- character entry\exit


## Inventory

Inventory is part character
Inventory is cells
Cells:
  Special cells:
    - Hands(optional)
    - Pocket for money(optional)
  Standart cells

## Things

### Attribute
- owner

### Send event
- Get damage
- Destroy
- Upgrade
- Downgrade
- Change owner(target, new_owner)

### Listen to:
- damage(target)
- move(source, target, subject)
- combine(targets)