const candidates = require("../data/Candidate");

function getAllCandidates() {
    return candidates;
}

function getCandidateById(id) {
    return candidates.find(candidate => candidate.id == id);
}

function addCandidate(candidate) {
    candidates.push(candidate);
    return candidate;
}

function deleteCandidate(id) {
    const index = candidates.findIndex(candidate => candidate.id == id);

    if (index === -1) {
        return null;
    }

    return candidates.splice(index, 1);
}

function searchDepartment(department) {
    return candidates.filter(candidate => candidate.department == department);
}

module.exports = {
    getCandidateById,
    getAllCandidates,
    addCandidate,
    deleteCandidate,
    searchDepartment
};