const models = require('../models')

/**
 * GET /games
 * Get all games.
 */
exports.getGames = (req, res) => {
  // TODO: consider returning only public games
  return res.status(200).json(models.games)
}

/**
 * POST /games/add
 * Create a game (with users).
 */
exports.postGameCreate = (req, res) => {
  const game = req.body.game
  const users = req.body.users

  // Append game to list of games
  game.users = users
  models.games.push(game)
  return res.status(200).json(game)
}

/**
 * POST /games/remove
 * Remove a game.
 */
exports.postGameRemove = (req, res) => {
  const game = req.body.game

  // Locate game index by game id
  const index = model.games.findIndex(g => g.id === game.id)
  if (index === -1) {
    return res.status(401).json(`Game {game.id} not found.`)
  }

  // Remove game
  models.games.splice(index, 1)
  return res.status(200).json(true)
}

/**
 * POST /games/users/add
 * Add users to a game.
 */
exports.postGameUsersAdd = (req, res) => {
  const game = req.body.game
  const users = req.body.users

  // Locate game index by game id
  const index = model.games.findIndex(g => g.id === game.id)
  if (index === -1) {
    return res.status(401).json(`Game {game.id} not found.`)
  }

  // Add users to game
  models.games[index].users += users
  return res.status(200).json(game)
}

/**
 * POST /games/users/remove
 * Remove user from a game.
 */
exports.postGameUsersRemove = (req, res) => {
  const game = req.body.game
  const user = req.body.user

  // Locate game index by game id
  const gameIndex = model.games.findIndex(g => g.id === game.id)
  if (gameIndex === -1) {
    return res.status(401).json(`Game {game.id} not found.`)
  }

  // Locate user index by user id
  const userIndex = model.games[gameIndex].users.findIndex(u => u.id === users.id)
  if (userIndex === -1) {
    return res.status(401).json(`User {user.id} not found.`)
  }

  // Remove user from game
  models.games[gameIndex].users.splice(userIndex, 1)
  return res.status(200).json(true)
}