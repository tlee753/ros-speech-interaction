execute_process(COMMAND "/home/tyler/catkin_ws/build/audio_common/sound_play/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/tyler/catkin_ws/build/audio_common/sound_play/catkin_generated/python_distutils_install.sh) returned error code ")
endif()
