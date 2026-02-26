const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getIndustries(region = null) {
  try {
    // Build query parameters
    let url = `${BASE_URL}/api/industries?where[status][equals]=published&sort=order`;
    
    // Add region filter if provided
    if (region) {
      url += `&where[region][contains]=${region}`;
    }

    const response = await fetch(url, {
      cache: 'no-store', // Use 'force-cache' for static generation
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch industries: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Payload returns data in { docs: [...] } format
    const industries = data.docs || [];
    
    // Transform Payload data to match frontend format
    return industries.map((industry) => ({
      id: industry.id,
      title: industry.title,
      description: industry.description,
      image: typeof industry.image === 'object' ? industry.image?.url : industry.image,
      imageSrc: typeof industry.image === 'object' ? industry.image?.url : industry.image,
      imageAlt: industry.title,
      link: industry.readMoreLink,
      readMore: industry.readMoreLink,
      order: industry.order,
    }));
  } catch (error) {
    console.error('Error fetching industries:', error);
    return [];
  }
}

export async function getNews(region = null, limit = 3) {
  try {
    // Use Payload's built-in API
    let url = `${BASE_URL}/api/news?where[status][equals]=published&sort=-publishedDate&limit=${limit}`;
    
    // Add region filter if provided
    if (region) {
      url += `&where[region][contains]=${region}`;
    }

    console.log('Fetching news from:', url);

    const response = await fetch(url, {
      cache: 'no-store', // Disable caching for debugging
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('News response status:', response.status);

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('News data:', data);
    
    // Payload returns data in { docs: [...] } format
    const news = data.docs || [];
    
    // Transform data
    return news.map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      publishedDate: item.publishedDate,
      featuredImage: typeof item.featuredImage === 'object' ? item.featuredImage?.url : item.featuredImage,
      link: `/insight/news/${item.slug}`,
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export async function getBlogs(region = null, limit = 3) {
  try {
    // Use Payload's built-in API
    let url = `${BASE_URL}/api/blogs?where[status][equals]=published&sort=-publishedDate&limit=${limit}`;
    
    // Add region filter if provided
    if (region) {
      url += `&where[region][contains]=${region}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 300 }, // Cache for 5 minutes
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Payload returns data in { docs: [...] } format
    const blogs = data.docs || [];
    
    // Transform data
    return blogs.map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      publishedDate: item.publishedDate,
      featuredImage: typeof item.featuredImage === 'object' ? item.featuredImage?.url : item.featuredImage,
      tags: item.tags || [],
      link: `/insight/blogs/${item.slug}`,
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getTeamMembers(region = null, department = null) {
  try {
    // Use Payload's built-in API
    let url = `${BASE_URL}/api/team?where[status][equals]=active&sort=order`;
    
    // Add region filter if provided
    if (region) {
      url += `&where[region][contains]=${region}`;
    }

    // Add department filter if provided
    if (department) {
      url += `&where[department][equals]=${department}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 300 }, // Cache for 5 minutes
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch team members: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Payload returns data in { docs: [...] } format
    const team = data.docs || [];
    
    // Transform data
    return team.map((member) => ({
      id: member.id,
      name: member.name,
      slug: member.slug,
      position: member.position,
      department: member.department,
      profileImage: typeof member.profileImage === 'object' ? member.profileImage?.url : member.profileImage,
      shortBio: member.shortBio,
      bio: member.bio,
      email: member.email,
      phone: member.phone,
      linkedIn: member.linkedIn,
      twitter: member.twitter,
      achievements: member.achievements || [],
      expertise: member.expertise || [],
      order: member.order,
      link: `/team/${member.slug}`,
    }));
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

export async function getTeamMemberBySlug(slug) {
  try {
    const url = `${BASE_URL}/api/team?where[slug][equals]=${slug}&where[status][equals]=active`;

    const response = await fetch(url, {
      next: { revalidate: 300 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch team member: ${response.statusText}`);
    }

    const data = await response.json();
    const team = data.docs || [];
    
    if (team.length === 0) {
      return null;
    }

    const member = team[0];
    
    return {
      id: member.id,
      name: member.name,
      slug: member.slug,
      position: member.position,
      department: member.department,
      profileImage: typeof member.profileImage === 'object' ? member.profileImage?.url : member.profileImage,
      shortBio: member.shortBio,
      bio: member.bio,
      email: member.email,
      phone: member.phone,
      linkedIn: member.linkedIn,
      twitter: member.twitter,
      achievements: member.achievements || [],
      expertise: member.expertise || [],
    };
  } catch (error) {
    console.error('Error fetching team member:', error);
    return null;
  }
}
