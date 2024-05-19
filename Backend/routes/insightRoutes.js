// routes.js

const express = require('express');
const router = express.Router();
const insightsController = require('../controllers/insight.controller');

// Route to fetch all insights
router.get('/insights', insightsController.getAllInsights);

// Route to filter insights by end year
router.get('/insights/filter/endYear/:endYear', insightsController.filterByEndYear);

// Route to filter insights by intensity
router.get('/insights/filter/intensity/:intensity', insightsController.filterByIntensity);

// Route to filter insights by sector
router.get('/insights/filter/sector/:sector', insightsController.filterBySector);

// Route to filter insights by topic
router.get('/insights/filter/topic/:topic', insightsController.filterByTopic);

// Route to filter insights by insight
router.get('/insights/filter/insight/:insight', insightsController.filterByInsight);

// Route to filter insights by URL
router.get('/insights/filter/url/:url', insightsController.filterByURL);

// Route to filter insights by region
router.get('/insights/filter/region/:region', insightsController.filterByRegion);

// Route to filter insights by start year
router.get('/insights/filter/startYear/:startYear', insightsController.filterByStartYear);

// Route to filter insights by impact
router.get('/insights/filter/impact/:impact', insightsController.filterByImpact);

// Route to filter insights by added date
router.get('/insights/filter/added/:added', insightsController.filterByAdded);

// Route to filter insights by published date
router.get('/insights/filter/published/:published', insightsController.filterByPublished);

// Route to filter insights by country
router.get('/insights/filter/country/:country', insightsController.filterByCountry);

// Route to filter insights by relevance
router.get('/insights/filter/relevance/:relevance', insightsController.filterByRelevance);

// Route to filter insights by PESTLE
router.get('/insights/filter/pestle/:pestle', insightsController.filterByPEST);

// Route to filter insights by source
router.get('/insights/filter/source/:source', insightsController.filterBySource);

// Route to filter insights by title
router.get('/insights/filter/title/:title', insightsController.filterByTitle);

// Route to filter insights by likelihood
router.get('/insights/filter/likelihood/:likelihood', insightsController.filterByLikelihood);

module.exports = router;
