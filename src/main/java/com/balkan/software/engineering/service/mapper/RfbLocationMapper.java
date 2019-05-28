package com.balkan.software.engineering.service.mapper;

import com.balkan.software.engineering.domain.*;
import com.balkan.software.engineering.service.dto.RfbLocationDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link RfbLocation} and its DTO {@link RfbLocationDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface RfbLocationMapper extends EntityMapper<RfbLocationDTO, RfbLocation> {


    @Mapping(target = "rvbEvents", ignore = true)
    RfbLocation toEntity(RfbLocationDTO rfbLocationDTO);

    default RfbLocation fromId(Long id) {
        if (id == null) {
            return null;
        }
        RfbLocation rfbLocation = new RfbLocation();
        rfbLocation.setId(id);
        return rfbLocation;
    }
}
