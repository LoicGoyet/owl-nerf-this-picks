const api = endpoint => fetch(`https://api.overwatchleague.com/${endpoint}?locale=fr`)

const fetchSchedule = () =>
    api('schedule')
        .then(response => response.json())
        .catch(error => error)
        .then(response => response.data)

const fetchTeams = () =>
    api('teams')
        .then(response => response.json())
        .catch(error => error)

const fetchRanking = () =>
    api('ranking')
        .then(response => response.json())
        .catch(error => error)

export default {
    fetchSchedule,
    fetchTeams,
    fetchRanking,
}