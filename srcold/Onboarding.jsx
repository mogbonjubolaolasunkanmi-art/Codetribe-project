
import Codetribe from "./assets/Codetribe.jpg"
import {
  Heart,
  Dumbbell,
  ClipboardList,
  BookOpen,
  Brain,
  Moon,
  Sparkles,
  ArrowRight,
  Leaf,
} from "lucide-react";

function Onboarding() {
  return (
    <div className="min-h-screen bg-[#f8faf9] px-4 py-8">
      <div className="mx-auto min-h-[700px] max-w-4xl rounded-lg border border-gray-200 bg-white px-6 py-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Codetribe} alt="" />
          </div>

        </div>

        {/* Heading */}
        <div className="mx-auto mt-20 max-w-xl text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            What do you want to improve?
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Select the areas you'd like to focus on. You can choose more than one.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">

          {/* Health */}
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
              <Heart className="h-6 w-6 text-green-500" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">
                Health
              </h3>
              <p className="text-xs text-gray-400">
                Feel better, have more energy
              </p>
            </div>
          </div>

          {/* Fitness */}
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
              <Dumbbell className="h-6 w-6 text-green-500" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">
                Fitness
              </h3>
              <p className="text-xs text-gray-400">
                Get stronger, stay active
              </p>
            </div>
          </div>

          {/* Productivity */}
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50">
              <ClipboardList className="h-6 w-6 text-yellow-500" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">
                Productivity
              </h3>
              <p className="text-xs text-gray-400">
                Get more done
              </p>
            </div>
          </div>

          {/* Learning */}
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
              <BookOpen className="h-6 w-6 text-orange-500" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">
                Learning
              </h3>
              <p className="text-xs text-gray-400">
                Build new skills
              </p>
            </div>
          </div>

          {/* Mindfulness */}
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
              <Brain className="h-6 w-6 text-purple-500" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">
                Mindfulness
              </h3>
              <p className="text-xs text-gray-400">
                Reduce stress, be present
              </p>
            </div>
          </div>

          {/* Sleep */}
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
              <Moon className="h-6 w-6 text-purple-500" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">
                Sleep
              </h3>
              <p className="text-xs text-gray-400">
                Better rest, better you
              </p>
            </div>
          </div>

          {/* Personal */}
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
              <Sparkles className="h-6 w-6 text-purple-500" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">
                Personal
              </h3>
              <p className="text-xs text-gray-400">
                Be the best version of yourself
              </p>
            </div>
          </div>

        </div>

        {/* Next button */}
        <div className="mx-auto mt-12 flex max-w-2xl justify-end">
          <button className="flex items-center gap-2 rounded-lg bg-green-600 px-7 py-3 text-sm font-medium text-white">
            Next
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default Onboarding;