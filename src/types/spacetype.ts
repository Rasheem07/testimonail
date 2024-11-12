import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface TestimonialSpaceData {
    space_id: number;
    user_id: string;
    space_name: string;
    logo: string | StaticImport;
    header_title: string | null;
    custom_message: string | null;
    questions: string[] | null;
    collect_extra: boolean;
    collection_type: string;
    collect_star_ratings: boolean;
    allow_custom_btn_color: boolean;
    custom_btn_color: string | null;
    language: string | null;
    thank_page_image: string | null;
    thank_page_title: string | null;
    thank_page_message: string | null;
    allow_social: boolean;
    redirect_url: string | null;
    reward_video: string | null;
    max_duration: number | null;
    max_char: number | null;
    video_btn_text: string | null;
    text_btn_text: string | null;
    consent_display: boolean;
    consent_statement: string | null;
    text_submission_title: string | null;
    questions_label: string | null;
    default_text_testimonial_avatar: string | null;
    affiliate_link: string | null;
    third_party: boolean;
    auto_populate_testimonials_to_the_wall_of_love: boolean;
    disable_video_recording_for_iphone_users: boolean;
    allow_search_engines_to_index_your_page: boolean;
    texts: string[] | null;
    videos: string[] | null;
}
