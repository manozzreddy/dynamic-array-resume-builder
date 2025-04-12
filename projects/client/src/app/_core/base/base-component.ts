import { DestroyRef, Directive, inject, signal } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { UserService } from "../services/user/user.service";

@Directive()
export abstract class BaseComponent {
    loading = signal(false);

    // Injections
    protected readonly destroyRef = inject(DestroyRef);
    protected readonly snackBar = inject(MatSnackBar);
    protected readonly activatedRoute = inject(ActivatedRoute);
    protected readonly router = inject(Router);
    protected readonly location = inject(Location);
    protected readonly userService = inject(UserService);
}