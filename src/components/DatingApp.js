import React, { useState } from 'react';
import { Heart, X, MessageCircle } from 'lucide-react';

// 샘플 프로필 데이터
const sampleProfiles = [
  {
    id: 1,
    name: "김민수",
    age: 28,
    location: "서울",
    job: "소프트웨어 엔지니어",
    bio: "안녕하세요! 취미로 등산과 요리를 즐기고 있습니다.",
    interests: ["여행", "음악", "영화"]
  },
  {
    id: 2,
    name: "이지은",
    age: 26,
    location: "인천",
    job: "그래픽 디자이너",
    bio: "긍정적인 성격의 소유자입니다. 새로운 사람들과의 만남을 기대합니다!",
    interests: ["사진", "카페", "독서"]
  }
];

const DatingApp = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [matches, setMatches] = useState([]);

  const handleLike = () => {
    setMatches([...matches, sampleProfiles[currentProfileIndex]]);
    showNextProfile();
  };

  const handleDislike = () => {
    showNextProfile();
  };

  const showNextProfile = () => {
    if (currentProfileIndex < sampleProfiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    }
  };

  const currentProfile = sampleProfiles[currentProfileIndex];

  return (
    <div className="max-w-md mx-auto p-4">
      {/* 프로필 카드 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src="/api/placeholder/400/300"
          alt="프로필 이미지"
          className="w-full h-64 object-cover"
        />
        
        <div className="p-4">
          <h2 className="text-2xl font-bold">
            {currentProfile.name}, {currentProfile.age}
          </h2>
          <p className="text-gray-600 mb-2">
            {currentProfile.location} • {currentProfile.job}
          </p>
          <p className="mb-4">{currentProfile.bio}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {currentProfile.interests.map((interest, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="flex justify-around p-4 border-t">
          <button 
            onClick={handleDislike}
            className="p-4 rounded-full bg-red-100 hover:bg-red-200 transition-colors"
          >
            <X className="w-8 h-8 text-red-500" />
          </button>
          
          <button className="p-4 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors">
            <MessageCircle className="w-8 h-8 text-blue-500" />
          </button>
          
          <button 
            onClick={handleLike}
            className="p-4 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
          >
            <Heart className="w-8 h-8 text-green-500" />
          </button>
        </div>
      </div>

      {/* 매치 목록 */}
      {matches.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">새로운 매치</h3>
          <div className="space-y-4">
            {matches.map((match) => (
              <div 
                key={match.id}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow"
              >
                <img
                  src="/api/placeholder/50/50"
                  alt={`${match.name} 프로필`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{match.name}</p>
                  <p className="text-sm text-gray-600">{match.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatingApp;