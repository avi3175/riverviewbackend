export declare const UserService: {
    getUserById: (id: number) => Promise<{
        id: number;
        email: string;
        name: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    } | null>;
    getAllUsers: () => Promise<{
        id: number;
        email: string;
        name: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }[]>;
};
//# sourceMappingURL=user.service.d.ts.map