(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{1801:(e,t,a)=>{Promise.resolve().then(a.bind(a,4462))},4462:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});var i=a(7437),n=a(4033);a(2265);var o=a(9343),s=a(1014);let r=e=>{let{children:t}=e,a=(0,o.cI)({defaultValues:{spaces:{space_name:"",header_title:"",custom_message:"",questions:["hello, how are you?","how the fuck is your life?"],collection_type:"text and video",collect_star_ratings:!1,allow_custom_btn_color:!1,custom_btn_color:"",language:"english"},thank_page:{image:"/gifs/thankyou.gif",title:"THANK YOU!",message:"Thank you so much for your shoutout! It means a ton for us! \uD83D\uDE4F",allow_social:!1,redirect_url:"",reward_video:!1},extra_settings:{max_duration:120,max_char:0,video_btn_text:"Record a video",text_btn_text:"Send in text",consent_display:"required",consent_statement:"I give permission to use this testimonial",text_submission_title:"Title",questions_label:"Questions",default_text_testimonial_avatar:"",affiliate_link:"",third_party:{},auto_populate_testimonials_to_the_wall_of_love:!1,disable_video_recording_for_iphone_users:!1,allow_search_engines_to_index_your_page:!1},logo:""},resolver:(0,s.F)(n.GH)});return(0,i.jsx)(o.RV,{...a,children:t})}},4033:(e,t,a)=>{"use strict";a.d(t,{GH:()=>r,mu:()=>l,xg:()=>_});var i=a(9772);let n=i.z.object({space_name:i.z.string().min(5,{message:"Name is required"}),header_title:i.z.string().min(6,{message:"Header title must not be empty and must be 6 characters"}),custom_message:i.z.string().min(12,{message:"Custom message must be 12 characters"}),questions:i.z.array(i.z.string()).min(1,{message:"At least one question is required"}),collect_extra:i.z.record(i.z.any()).optional(),collection_type:i.z.string().default("text and video"),collect_star_ratings:i.z.boolean().default(!1),allow_custom_btn_color:i.z.boolean().default(!1),custom_btn_color:i.z.string().optional(),language:i.z.string().default("english")}),o=i.z.object({image:i.z.string().optional().default("/gifs/thankyou.gif"),title:i.z.string().default("THANK YOU!"),message:i.z.string().default("Thank you so much for your shoutout! It means a ton for us! \uD83D\uDE4F"),allow_social:i.z.boolean().default(!1),redirect_url:i.z.string().optional(),reward_video:i.z.boolean().default(!1)}),s=i.z.object({max_duration:i.z.number().default(120),max_char:i.z.number().default(0),video_btn_text:i.z.string().default("Record a video"),text_btn_text:i.z.string().default("Send in text"),consent_display:i.z.string().default("required"),consent_statement:i.z.string().default("I give permission to use this testimonial"),text_submission_title:i.z.string().default("Title"),questions_label:i.z.string().default("Questions"),default_text_testimonial_avatar:i.z.string().optional(),affiliate_link:i.z.string().optional(),third_party:i.z.record(i.z.any()).optional(),auto_populate_testimonials_to_the_wall_of_love:i.z.boolean().optional(),disable_video_recording_for_iphone_users:i.z.boolean().optional(),allow_search_engines_to_index_your_page:i.z.boolean().optional()}),r=i.z.object({spaces:n,thank_page:o,extra_settings:s,logo:i.z.any().optional()}),l=i.z.object({space_name:i.z.string().min(1,{message:"space name should be passed!"}),image_only:i.z.boolean(),image_src:i.z.union([i.z.instanceof(File),i.z.string()]).optional(),ratings:i.z.number().int().min(1).max(5).optional(),content:i.z.string().max(300).optional(),name:i.z.string().max(255).optional(),user_photo:i.z.union([i.z.instanceof(File),i.z.string()]).optional(),date:i.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).default(()=>new Date().toISOString().split("T")[0])}).refine(e=>!e.image_only||e.image_src,{message:"image_src is required if image_only is true",path:["image_src"]}).refine(e=>e.image_only||e.content,{message:"content is required if image_only is false",path:["content"]}),_=i.z.object({space_name:i.z.string().min(1,{message:"space name should be passed!"}),video:i.z.instanceof(File).optional(),duration:i.z.number().max(120,{message:"Duration must be less than 120 seconds."}),name:i.z.string().max(255),ratings:i.z.number().int().min(1).max(5).optional()});i.z.object({id:i.z.string().uuid(),space_id:i.z.number().int(),socialId:i.z.string().max(255),username:i.z.string().max(255),content:i.z.string().max(255),social_provider:i.z.string().max(255),date:i.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).default(()=>new Date().toISOString().split("T")[0])})}},e=>{var t=t=>e(e.s=t);e.O(0,[343,374,130,215,744],()=>t(1801)),_N_E=e.O()}]);