export declare const AuthService: {
    register: (payload: any) => Promise<{
        user: {
            id: number;
            email: string;
            password: string;
            name: string | null;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        token: string;
    }>;
    login: (payload: any) => Promise<{
        user: {
            id: number;
            email: string;
            password: string;
            name: string | null;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        token: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map