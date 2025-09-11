// Analytics data service
class AnalyticsService {
  constructor() {
    this.baseUrl = '/api/analytics';
  }

  async fetchOverview() {
    try {
      const response = await fetch(`${this.baseUrl}/overview`);
      if (!response.ok) {
        throw new Error('Failed to fetch overview data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching overview:', error);
      throw error;
    }
  }

  async fetchDailyProjects() {
    try {
      const response = await fetch(`${this.baseUrl}/daily-projects`);
      if (!response.ok) {
        throw new Error('Failed to fetch daily projects data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching daily projects:', error);
      throw error;
    }
  }

  async fetchWorkloadHeatmap() {
    try {
      const response = await fetch(`${this.baseUrl}/workload-heatmap`);
      if (!response.ok) {
        throw new Error('Failed to fetch workload heatmap data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching workload heatmap:', error);
      throw error;
    }
  }
}

export default new AnalyticsService();

