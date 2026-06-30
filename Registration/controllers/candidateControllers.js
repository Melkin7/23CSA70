const candidateService = require("../services/candidateServices");

function getCandidates(req, res) {
    const data = candidateService.getAllCandidates();
    res.json(data);
}

function getCandidate(req, res) {
    const id = req.params.id;
    const candidate = candidateService.getCandidateById(id);

    if (!candidate) {
        return res.status(404).json({
            message: "Candidate not found"
        });
    }

    res.json(candidate);
}

function createCandidate(req, res) {
    const candidate = req.body;
    const newCandidate = candidateService.addCandidate(candidate);

    res.status(201).json(newCandidate);
}

function removeCandidate(req, res) {
    const id = req.params.id;
    const deletedCandidate = candidateService.deleteCandidate(id);

    if (!deletedCandidate) {
        return res.status(404).json({
            message: "id not found"
        });
    }

    res.json({
        message: "deleted successfully"
    });
}

function searchDepartment(req, res) {
    const dept = req.params.department;
    const candidates = candidateService.searchDepartment(dept);

    res.json(candidates);
}

module.exports = {
    getCandidates,
    getCandidate,
    createCandidate,
    removeCandidate,
    searchDepartment
};