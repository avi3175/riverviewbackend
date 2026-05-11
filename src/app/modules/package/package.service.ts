import { prisma } from "../../lib/prisma";

// CREATE
const createPackage = async (data: any) => {
  return await prisma.package.create({
    data,
  });
};

// GET ALL (WITH SEARCH + FILTER)
const getAllPackages = async (query: any) => {
  const {
    search,
    category,
    minPrice,
    maxPrice,
    page = 1,
    limit = 10,
    sort = "latest",
  } = query;

  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  const whereConditions: any = {
    ...(search && {
      title: {
        contains: search,
        mode: "insensitive",
      },
    }),

    ...(category && { category }),

    ...((minPrice || maxPrice) && {
      price: {
        gte: minPrice ? Number(minPrice) : undefined,
        lte: maxPrice ? Number(maxPrice) : undefined,
      },
    }),
  };

  // 🧠 SORT LOGIC
  let orderBy: any = { createdAt: "desc" }; // default = latest

  if (sort === "price_asc") {
    orderBy = { price: "asc" };
  }

  if (sort === "price_desc") {
    orderBy = { price: "desc" };
  }

  if (sort === "oldest") {
    orderBy = { createdAt: "asc" };
  }

  if (sort === "latest") {
    orderBy = { createdAt: "desc" };
  }

  const [data, total] = await Promise.all([
    prisma.package.findMany({
      where: whereConditions,
      skip,
      take: limitNumber,
      orderBy,
    }),

    prisma.package.count({
      where: whereConditions,
    }),
  ]);

  return {
    data,
    meta: {
      page: pageNumber,
      limit: limitNumber,
      total,
      totalPages: Math.ceil(total / limitNumber),
    },
  };
};

// GET SINGLE
const getSinglePackage = async (id: number) => {
  return await prisma.package.findUnique({
    where: { id },
  });
};

// DELETE
const deletePackage = async (id: number) => {
  return await prisma.package.delete({
    where: { id },
  });
};

// UPDATE
const updatePackage = async (id: number, data: any) => {
  return await prisma.package.update({
    where: { id },
    data,
  });
};



const getFeaturedPackages = async () => {
  return await prisma.package.findMany({
    where: {
      isFeatured: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};


export const PackageService = {
  createPackage,
  getAllPackages,
  getSinglePackage,
  deletePackage,
  updatePackage,
  getFeaturedPackages,
};