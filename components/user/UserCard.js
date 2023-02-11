// Importing necessary components and services
import Link from "../Link";
import ReactMarkdown from "react-markdown";
import { abbreviateNumber } from "../../services/utils/abbreviateNumbers";
import FallbackImage from "../FallbackImage";

// UserCard component that takes in a "profile" object as a prop
export default function UserCard({ profile }) {
  // Rendering the UserCard component
  return (
    // A Link component that wraps the UserCard content
    <Link
      // Setting the href to the username of the profile passed in as a prop
      href={`/${profile.username}`}
      // Setting a className for the Link component for styling
      className="flex flex-col items-center border-2 w-[14rem] h-[17rem] overflow-hidden rounded-lg shadow-lg transition duration-350 p-4 gap-3 hover:scale-105 duration-500 ease-in-out hover:border-orange-600"
    >
      // A div to display the profile picture
      <div className="flex justify-center relative">
        // The FallbackImage component to display the profile picture or a fallback text
        <FallbackImage
          // The source of the profile picture
          src={`https://github.com/${profile.username}.png`}
          // The alt text for the profile picture
          alt={`Profile picture of ${profile.name}`}
          // The width of the profile picture
          width={80}
          // The height of the profile picture
          height={80}
          // Setting a className for styling
          className="rounded-full"
          // The fallback text to be displayed if the profile picture cannot be loaded
          fallback={profile.name}
        />
      </div>
      // A div to display the profile name and bio
      <div>
        // The profile name, styled with className
        <h3 className="text-xl justify-center text-center mb-2 text-orange-600 font-bold">
          {profile.name}
        </h3>
        // The ReactMarkdown component to display the profile bio, styled with className
        <ReactMarkdown className="text-center line-clamp-5">
          {profile.bio}
        </ReactMarkdown>
      </div>
    </Link>
  );
}
