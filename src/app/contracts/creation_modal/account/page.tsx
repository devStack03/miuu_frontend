import { Separator } from "@/registry/new-york/ui/separator"
import { AccountForm } from "@/app/contracts/creation_modal/account/account-form"
import ModalLayout from "@/app/contracts/creation_modal/page"
export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}
