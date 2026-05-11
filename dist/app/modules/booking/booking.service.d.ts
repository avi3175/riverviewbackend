export declare const BookingService: {
    createBooking: (userId: number, data: any) => Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        date: Date;
        guests: number;
        packageId: number;
    }>;
    getUserBookings: (userId: number) => Promise<({
        package: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        date: Date;
        guests: number;
        packageId: number;
    })[]>;
    getAllBookings: () => Promise<({
        user: {
            id: number;
            email: string;
            password: string;
            name: string | null;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        package: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        date: Date;
        guests: number;
        packageId: number;
    })[]>;
    deleteBooking: (id: number) => Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        date: Date;
        guests: number;
        packageId: number;
    }>;
};
//# sourceMappingURL=booking.service.d.ts.map