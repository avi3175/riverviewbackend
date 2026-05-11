export declare const PackageService: {
    createPackage: (data: any) => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        shortDesc: string;
        description: string;
        price: number;
        category: string;
        capacity: number;
        image: string;
        isFeatured: boolean;
        userId: number | null;
    }>;
    getAllPackages: (query: any) => Promise<{
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            shortDesc: string;
            description: string;
            price: number;
            category: string;
            capacity: number;
            image: string;
            isFeatured: boolean;
            userId: number | null;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getSinglePackage: (id: number) => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        shortDesc: string;
        description: string;
        price: number;
        category: string;
        capacity: number;
        image: string;
        isFeatured: boolean;
        userId: number | null;
    } | null>;
    deletePackage: (id: number) => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        shortDesc: string;
        description: string;
        price: number;
        category: string;
        capacity: number;
        image: string;
        isFeatured: boolean;
        userId: number | null;
    }>;
    updatePackage: (id: number, data: any) => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        shortDesc: string;
        description: string;
        price: number;
        category: string;
        capacity: number;
        image: string;
        isFeatured: boolean;
        userId: number | null;
    }>;
    getFeaturedPackages: () => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        shortDesc: string;
        description: string;
        price: number;
        category: string;
        capacity: number;
        image: string;
        isFeatured: boolean;
        userId: number | null;
    }[]>;
};
//# sourceMappingURL=package.service.d.ts.map