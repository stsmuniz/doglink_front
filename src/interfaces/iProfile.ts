import iExternalLink from "@/interfaces/iExternalLink";

export default interface iProfile {
    id: number,
    custom_url: string,
    primary_color: string,
    secondary_color: string,
    theme: string,
    sections: object,
}
