import { FormGroup } from '@angular/forms';

export function validateForm(form: FormGroup): boolean {
  if (form.invalid) {
    markFormGroupTouched(form);
    return false;
  }

  return true;
}

export function markFormGroupTouched(formGroup: FormGroup): void {
  (Object as any).values(formGroup.controls).forEach((control: FormGroup) => {
    control.markAsTouched();

    if (control.controls) {
      markFormGroupTouched(control);
    }
  });
}
