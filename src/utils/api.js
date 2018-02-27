const fetchSchedule = () =>
    fetch('https://api.overwatchleague.com/schedule')
        .then(response => response.json())
        .catch(error => error)
        .then(response => response.data)

export default {
    fetchSchedule
}