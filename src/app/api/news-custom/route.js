import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

// GET - Read news
export async function GET(request) {
  const payload = await getPayloadHMR({ config: configPromise });
  const { searchParams } = new URL(request.url);

  try {
    const where = {};

    const slug = searchParams.get("slug");
    const region = searchParams.get("region");
    const status = searchParams.get("status") || "published";
    const limit = parseInt(searchParams.get("limit")) || 10;

    if (slug) {
      where.slug = { equals: slug };
    }

    if (region) {
      where.region = { contains: region };
    }

    where.status = { equals: status };

    const news = await payload.find({
      collection: "news",
      where,
      sort: "-publishedDate",
      depth: 2,
      limit,
    });

    return Response.json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    return Response.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}

// POST - Create news
export async function POST(request) {
  const payload = await getPayloadHMR({ config: configPromise });

  try {
    const body = await request.json();

    const news = await payload.create({
      collection: "news",
      data: body,
    });

    return Response.json(news, { status: 201 });
  } catch (error) {
    console.error("Error creating news:", error);
    return Response.json(
      { error: "Failed to create news", details: error.message },
      { status: 500 }
    );
  }
}

// PATCH - Update news
export async function PATCH(request) {
  const payload = await getPayloadHMR({ config: configPromise });
  const { searchParams } = new URL(request.url);

  try {
    const id = searchParams.get("id");
    if (!id) {
      return Response.json(
        { error: "News ID is required" },
        { status: 400 }
      );
    }

    const body = await request.json();

    const news = await payload.update({
      collection: "news",
      id,
      data: body,
    });

    return Response.json(news);
  } catch (error) {
    console.error("Error updating news:", error);
    return Response.json(
      { error: "Failed to update news", details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete news
export async function DELETE(request) {
  const payload = await getPayloadHMR({ config: configPromise });
  const { searchParams } = new URL(request.url);

  try {
    const id = searchParams.get("id");
    if (!id) {
      return Response.json(
        { error: "News ID is required" },
        { status: 400 }
      );
    }

    await payload.delete({
      collection: "news",
      id,
    });

    return Response.json({ success: true, message: "News deleted successfully" });
  } catch (error) {
    console.error("Error deleting news:", error);
    return Response.json(
      { error: "Failed to delete news", details: error.message },
      { status: 500 }
    );
  }
}
