const Insight = require('../models/Insight');
const filterHelper = require('../utils/filterHelper');
// Controller to fetch all insights
exports.getAllInsights = async (req, res) => {
    try {
        const insights = await Insight.find();
        res.json(insights);
    } catch (error) {
        console.error('Error fetching insights:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by end year
// exports.filterByEndYear = async (req, res) => {
//     const { endYear } = req.params;
//     try {
//         const insights = await Insight.find({ end_year: endYear });
//         res.json(insights);
//     } catch (error) {
//         console.error('Error filtering insights by end year:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

exports.filterByEndYear = async (req, res) => {
    const { endYear } = req.params;

    // Validate endYear using filterHelper
    if (!filterHelper.isValidYear(endYear)) {
        return res.status(400).json({ message: 'Invalid end year' });
    }

    try {
        // Query database for insights filtered by end year
        const insights = await Insight.find({ end_year: endYear });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by end year:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by topic
exports.filterByTopic = async (req, res) => {
    const { topic } = req.params;
    try {
        const insights = await Insight.find({ topic: topic });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by topic:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by sector
exports.filterBySector = async (req, res) => {
    const { sector } = req.params;
    try {
        const insights = await Insight.find({ sector: sector });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by sector:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by region
exports.filterByRegion = async (req, res) => {
    const { region } = req.params;
    try {
        const insights = await Insight.find({ region: region });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by region:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by PEST
exports.filterByPEST = async (req, res) => {
    const { pest } = req.params;
    try {
        const insights = await Insight.find({ pestle: pest });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by PEST:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by source
exports.filterBySource = async (req, res) => {
    const { source } = req.params;
    try {
        const insights = await Insight.find({ source: source });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by source:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by SWOT
exports.filterBySWOT = async (req, res) => {
    const { swot } = req.params;
    try {
        const insights = await Insight.find({ swot: swot });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by SWOT:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by country
exports.filterByCountry = async (req, res) => {
    const { country } = req.params;
    try {
        const insights = await Insight.find({ country: country });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by country:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by city
exports.filterByCity = async (req, res) => {
    const { city } = req.params;
    try {
        const insights = await Insight.find({ city: city });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by city:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
// Controller to filter insights by start year
// exports.filterByStartYear = async (req, res) => {
//     const { start_year } = req.params;
//     try {
//         const insights = await Insight.find({ start_year });
//         res.json(insights);
//     } catch (error) {
//         console.error('Error filtering insights by start year:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };
exports.filterByStartYear = async (req, res) => {
    console.log(req.params);
    const { startYear } = req.params;
 console.log(startYear)
    // Validate start_year using filterHelper
    if (!filterHelper.isValidYear(startYear)) {
        return res.status(400).json({ message: 'Invalid start year' });
    }

    try {
        // Query database for insights filtered by start year
        const insights = await Insight.find({ startYear });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by start year:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
// Controller to filter insights by impact
exports.filterByImpact = async (req, res) => {
    const { impact } = req.params;
    try {
        const insights = await Insight.find({ impact });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by impact:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
// Controller to filter insights by intensity
exports.filterByIntensity = async (req, res) => {
    const { intensity } = req.params;
    try {
        const insights = await Insight.find({ intensity });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by intensity:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by insight
exports.filterByInsight = async (req, res) => {
    const { insight } = req.params;
    try {
        const insights = await Insight.find({ insight });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by insight:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by URL
exports.filterByURL = async (req, res) => {
    const { url } = req.params;

    // Validate URL using filterHelper
    if (!filterHelper.isValidURL(url)) {
        return res.status(400).json({ message: 'Invalid URL' });
    }

    try {
        // Query database for insights filtered by URL
        const insights = await Insight.find({ url: { $regex: url, $options: 'i' } });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by URL:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by added date
exports.filterByAdded = async (req, res) => {
    const { added } = req.params;
    try {
        const insights = await Insight.find({ added });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by added date:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by published date
exports.filterByPublished = async (req, res) => {
    const { published } = req.params;
    try {
        const insights = await Insight.find({ published });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by published date:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by relevance
exports.filterByRelevance = async (req, res) => {
    const { relevance } = req.params;

    // Validate relevance using filterHelper
    if (!filterHelper.isPositiveInteger(relevance)) {
        return res.status(400).json({ message: 'Relevance must be a positive integer' });
    }

    try {
        // Query database for insights filtered by relevance
        const insights = await Insight.find({ relevance });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by relevance:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by title
exports.filterByTitle = async (req, res) => {
    const { title } = req.params;
    try {
        const insights = await Insight.find({title: { $regex: new RegExp(title, 'i') }});
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by title:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to filter insights by likelihood
exports.filterByLikelihood = async (req, res) => {
    const { likelihood } = req.params;

    // Validate likelihood using filterHelper
    if (!filterHelper.isPositiveInteger(likelihood)) {
        return res.status(400).json({ message: 'Likelihood must be a positive integer' });
    }

    try {
        // Query database for insights filtered by likelihood
        const insights = await Insight.find({ likelihood });
        res.json(insights);
    } catch (error) {
        console.error('Error filtering insights by likelihood:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
