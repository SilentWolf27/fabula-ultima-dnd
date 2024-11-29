# Fabula Ultima DND

This project is a Dungeons and Dragons software tool that helps me and my friends to play the Fabula Ultima campaign.

## Technologies used

- Next.js
- TypeScript
- Supabase
- PostgreSQL

## Features

### Players Features

- [X] [User authentication](#user-authentication)
- [] Basic character creation
- [] Bonds
- [] Equipment
- [] Fabula points
- [] Inventory
- [] Classes, abilities and levels
- [] Zenit
- [] Attributes and status effects
- [] Combat system
- [] Notes and journal
- [] Maps
- [] Export to PDF or other formats
- [] Real time multiplayer support

### Dungeon Master Features

- [X] [Campaign creation](#campaign-creation)

## Feature details

### Player Features

#### User authentication

The authentication is done using Supabase Auth. Currently, the only way to register is by the admin manually creating the user in the Supabase dashboard.

- [X] Login using email and password
- [X] Register using email and password (manually performed by the admin)

### Master Features

#### Campaign creation

The Dungeon Master can create a campaign and invite players to join it. The campaign has a name, description, a short description, and a settings object that can be used to store any kind of information.

- [X] Create a campaign
- [X] Campaign settings
- [] Invite players to join the campaign
- [] Approve player requests to join the campaign
- [] Remove players from the campaign
- [X] Update campaign
- [] Delete campaign
