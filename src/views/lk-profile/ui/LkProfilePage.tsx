import { Breadcrumbs } from "@/shared/ui";
import { EditProfileForm } from "@/features/edit-profile";
import { ProfileBalance } from "@/widgets/profile-balance";

export const LkProfilePage = () => {
  return (
    <div>
      <h1 className={"text-6xl font-black text-main mb-8"}>Привет, Даниил!</h1>
      <Breadcrumbs />
      <div className={"mt-3"}>
        <ProfileBalance balance={1000} />
      </div>
      <div className={"mt-3"}>
        <EditProfileForm />
      </div>
    </div>
  );
};
