const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// ==================== NEWS CRUD ====================

export async function createNews(data) {
  try {
    const response = await fetch(`${BASE_URL}/api/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to create news: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating news:', error);
    throw error;
  }
}

export async function updateNews(id, data) {
  try {
    const response = await fetch(`${BASE_URL}/api/news?id=${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update news: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating news:', error);
    throw error;
  }
}

export async function deleteNews(id) {
  try {
    const response = await fetch(`${BASE_URL}/api/news?id=${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete news: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
}

// ==================== BLOGS CRUD ====================

export async function createBlog(data) {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to create blog: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
}

export async function updateBlog(id, data) {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs?id=${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update blog: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
}

export async function deleteBlog(id) {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs?id=${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete blog: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
}
